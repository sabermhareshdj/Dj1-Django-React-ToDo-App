import JobsFilter from "@/components/JobsFilter"
import JobsList from "@/components/JobList"

function JobList(){

    return(
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap">
                <JobsFilter />
                <JobsList />
            </div>
        </div>
    )

}

export default JobList