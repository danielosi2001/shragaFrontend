
import ProgramsDetails from "./programDetails/ProgramsDetails";

const details = [
    {
        name: "git",
        imgeUrl: "https://git-scm.com/images/logo@2x.png",
        link: "https://git-scm.com/",
        desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency"
    },
    {
        name: "Jira",
        imgeUrl: "https://www.atlassian.com/software/jira",
        link: "https://www.atlassian.com/software/jira",
        desc: "Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management."
    }
];

export default function Programs(): JSX.Element {
    return (
        <div>
            <ProgramsDetails
                name={details[0].name}
                src={details[0].imgeUrl}
                link={details[0].link}
                description={details[0].desc}
            />
            <ProgramsDetails
                name={details[1].name}
                src={details[1].imgeUrl}
                link={details[1].link}
                description={details[1].desc}
            />
        </div>
    );
}