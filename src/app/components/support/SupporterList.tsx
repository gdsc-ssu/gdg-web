import SupporterCard from './SupporterCard';
import { SupporterInfo } from '@/types/supporter';

const SupporterList = ({ supporters }: { supporters: Array<SupporterInfo> }) => {
    return (
        <div className="flex flex-col gap-10">
            {supporters.map((supporter, index) => (
                <SupporterCard key={index} supporterInfo={supporter} reverse={index % 2 !== 0} />
            ))}
        </div>
    );
};

export default SupporterList;
