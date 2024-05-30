import { ProjectsData } from "./Data"

interface Props {
  item: ProjectsData
}

export const WorkItems = ({ item }: Props) => {
  
  
  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img"/>
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}
