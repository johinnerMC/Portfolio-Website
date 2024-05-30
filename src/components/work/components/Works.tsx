import { projectsData, projectsNav } from "./Data"
import { WorkItems } from "./WorkItems"


export const Works = () => {
    return (
        <div>
            <div className="work__filters">
                {
                    projectsNav.map((item) => {
                        return (
                            <span key={item.name} className="work__item">{item.name}</span>
                        )
                    })
                }
            </div>
            <div className="work__container container grid">
                {
                    projectsData.map((item) => {
                        return <WorkItems item={item} key={item.id}/>
                    })
                }
            </div>
        </div>
    )
}
