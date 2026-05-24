import { Member } from "@/types/member";
import {
  NotionDataSourceProperty,
  NotionLibrary,
  NotionPage,
  NotionProperty,
  notionLibrary,
} from "@/app/libraries/notionLibrary";

export class MemberService {
  constructor(private library: NotionLibrary) {}

  private readonly generationPropertyName = "generation";

  /**
   * Generation 목록 조회
   */
  async getGenerations(): Promise<{ id: string; title: string }[]> {
    const properties = await this.library.getDataSourceProperties();
    const generationProperty = this.findDataSourceProperty(properties, [
      this.generationPropertyName,
      "기수",
    ]);
    const generations = this.getGenerationOptions(generationProperty);

    return generations
      .sort((a, b) => Number(a) - Number(b))
      .map((generation) => ({
        id: generation,
        title: generation,
      }));
  }

  /**
   * 특정 Generation의 멤버 목록 조회
   */
  async getMembersByGeneration(generation: string): Promise<Member[]> {
    const generationNumber = parseInt(generation, 10);
    if (isNaN(generationNumber) || generationNumber < 1) {
      throw new Error(`Invalid generation number: ${generation}`);
    }

    const pages = await this.library.queryPages({
      filter: {
        property: this.generationPropertyName,
        select: {
          equals: generation,
        },
      },
    });

    return pages.map((page, index) =>
      this.transformPageToMember(page, generation, index)
    );
  }

  private transformPageToMember(
    page: NotionPage,
    generation: string,
    index: number
  ): Member {
    const name = this.getPropertyText(page, ["name", "이름"]) || "Unknown";
    const interest = this.getPropertyValues(page, ["interest", "관심사"])
      .join("/")
      .split("/")
      .map((interestName) => interestName.trim())
      .filter(Boolean)
      .join(" / ");

    const memberId = `${generation}-${index}-${name
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
    const roleKey = this.normalizeRole(
      this.getPropertyText(page, ["role", "역할"])
    );
    const role = this.getRoleDisplayName(roleKey, generation);

    return {
      id: memberId,
      pictureUrl: this.getPageCoverUrl(page),
      name,
      websites: {
        github: this.getPropertyUrl(page, ["github", "깃허브"]) || "",
        linkedin: this.getPropertyUrl(page, ["linkedin", "링크드인"]) || "",
        instagram: this.getPropertyUrl(page, ["instagram", "인스타그램"]) || "",
      },
      interest,
      comment: this.getPropertyText(page, ["comment", "소개", "한마디"]),
      roleKey,
      role,
    };
  }

  private getRoleDisplayName(role: string, generation: string): string {
    const generationNumber = Number(generation);
    const roleConfig =
      generationNumber >= 4
        ? {
            lead: "Organizer",
            "core-member": "Team Member",
            member: "Member",
          }
        : {
            lead: "Lead",
            "core-member": "Core Member",
            member: "Member",
          };

    return roleConfig[role as keyof typeof roleConfig] || role;
  }

  private normalizeRole(role: string): string {
    return role.trim().toLowerCase();
  }

  private getPropertyText(page: NotionPage, aliases: string[]): string {
    return this.getPropertyValues(page, aliases).join(" / ");
  }

  private getPropertyUrl(
    page: NotionPage,
    aliases: string[]
  ): string | undefined {
    const property = this.findProperty(page, aliases);
    if (!property) {
      return undefined;
    }

    if (property.type === "url") {
      return this.asString(property.url);
    }

    if (property.type === "files") {
      const [file] = this.asArray(property.files);
      if (this.isRecord(file)) {
        const external = this.asRecord(file.external);
        const notionFile = this.asRecord(file.file);
        return this.asString(external?.url) || this.asString(notionFile?.url);
      }
    }

    return this.getPropertyText(page, aliases) || undefined;
  }

  private getPageCoverUrl(page: NotionPage): string | undefined {
    if (!page.cover) {
      return undefined;
    }

    if (page.cover.type === "external") {
      return page.cover.external?.url;
    }

    if (page.cover.type === "file") {
      return page.cover.file?.url;
    }

    return page.cover.external?.url || page.cover.file?.url;
  }

  private getPropertyValues(page: NotionPage, aliases: string[]): string[] {
    const property = this.findProperty(page, aliases);
    if (!property) {
      return [];
    }

    switch (property.type) {
      case "title":
        return this.getRichTextValues(property.title);
      case "rich_text":
        return this.getRichTextValues(property.rich_text);
      case "select": {
        const select = this.asRecord(property.select);
        return this.asString(select?.name) ? [this.asString(select?.name)] : [];
      }
      case "multi_select":
        return this.asArray(property.multi_select)
          .map((item) =>
            this.isRecord(item) ? this.asString(item.name) : undefined
          )
          .filter((value): value is string => Boolean(value));
      case "status": {
        const status = this.asRecord(property.status);
        return this.asString(status?.name) ? [this.asString(status?.name)] : [];
      }
      case "number":
        return typeof property.number === "number"
          ? [String(property.number)]
          : [];
      case "url":
        return this.asString(property.url) ? [this.asString(property.url)] : [];
      case "email":
        return this.asString(property.email)
          ? [this.asString(property.email)]
          : [];
      case "phone_number":
        return this.asString(property.phone_number)
          ? [this.asString(property.phone_number)]
          : [];
      case "files":
        return this.getFileUrls(property);
      default:
        return [];
    }
  }

  private findProperty(
    page: NotionPage,
    aliases: string[]
  ): NotionProperty | undefined {
    const properties = page.properties || {};
    const normalizedAliases = aliases.map((alias) => this.normalize(alias));
    const propertyName = Object.keys(properties).find((name) =>
      normalizedAliases.includes(this.normalize(name))
    );

    return propertyName ? properties[propertyName] : undefined;
  }

  private findDataSourceProperty(
    properties: Record<string, NotionDataSourceProperty>,
    aliases: string[]
  ): NotionDataSourceProperty | undefined {
    const normalizedAliases = aliases.map((alias) => this.normalize(alias));
    const propertyName = Object.keys(properties).find((name) =>
      normalizedAliases.includes(this.normalize(name))
    );

    return propertyName ? properties[propertyName] : undefined;
  }

  private getGenerationOptions(
    property: NotionDataSourceProperty | undefined
  ): string[] {
    if (!property || property.type !== "select") {
      return [];
    }

    const select = this.asRecord(property.select);
    return this.asArray(select?.options)
      .map((option) =>
        this.isRecord(option) ? this.asString(option.name) : undefined
      )
      .filter((value): value is string => Boolean(value));
  }

  private getRichTextValues(value: unknown): string[] {
    return this.asArray(value)
      .map((item) =>
        this.isRecord(item)
          ? this.asString(item.plain_text) ||
            this.asString(this.asRecord(item.text)?.content)
          : undefined
      )
      .filter((text): text is string => Boolean(text));
  }

  private getFileUrls(property: NotionProperty): string[] {
    return this.asArray(property.files)
      .map((file) => {
        if (!this.isRecord(file)) {
          return undefined;
        }

        const external = this.asRecord(file.external);
        const notionFile = this.asRecord(file.file);
        return this.asString(external?.url) || this.asString(notionFile?.url);
      })
      .filter((url): url is string => Boolean(url));
  }

  private normalize(value: string): string {
    return value.toLowerCase().replace(/[\s_-]/g, "");
  }

  private asArray(value: unknown): unknown[] {
    return Array.isArray(value) ? value : [];
  }

  private asRecord(value: unknown): Record<string, unknown> | undefined {
    return this.isRecord(value) ? value : undefined;
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
  }

  private asString(value: unknown): string {
    return typeof value === "string" ? value : "";
  }
}

export const memberService = new MemberService(notionLibrary);
