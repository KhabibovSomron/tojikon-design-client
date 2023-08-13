import { FC, useState } from 'react'
import './ProjectItem.css'
import LazyImage from '../lazy-image/LazyImage'

interface IProjectImageProps {
    image: string,
    index: number
}

const ProjectItem: FC<IProjectImageProps> = ({image, index}) => {

    const [isProjectHover, setIsProjectHover] = useState<boolean>(false)

    const onMouseEnterHandler = () => {
        setIsProjectHover(true)   
    }
    const onMouseLeaveHandler = () => {
        setIsProjectHover(false)
    }

    return (
        <div className="project-item" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <LazyImage className='project-item__image' alt='Постер проекта' skeletonClassName='project-item__image-skeleton' src={image}/>

            <div className="project-item__layer" style={isProjectHover ? {display: 'flex'}: {display: 'none'}}>
                <span>{index % 10 === 0 ? index: `0${index}`}</span>
            </div>
        </div>
    )
} 

export default ProjectItem;