
import { Button } from "@/components/ui/button"

function JobDetail(){
    
        return (
            <div className="container py-8">
                <div className="flex items-center justify-between">
                <h3 className="py-3 text-3xl"> Python Developer</h3>
                <Button> Apply Now</Button>
                </div>
                <div>
                   
                    <div className="flex flex-wrap">
                        <span className="pr-4 text-sm">Google</span>
                        <span className="px-4 text-sm">Mahmmod Ahmmad</span>
                        <span className="px-4 text-sm"> 3 hours ago </span>
                        <span className="px-4 text-sm"> Part Time </span>
                        <span className="px-4 text-sm"> MidSenior </span>
                    </div>
                    <div className="my-8 pr-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident quos repellendus corporis quas doloremque animi optio quisquam vitae eligendi! Eaque atque, repellendus minus debitis ratione dolores fugiat pariatur sunt.</p>
                    </div>
                </div>
            </div>
        )
    
    }
    

export default JobDetail