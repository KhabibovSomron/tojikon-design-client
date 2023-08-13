import { FC } from 'react'
import './Employee.css'
import LazyImage from '../lazy-image/LazyImage'


interface IEmployeeProps {
    name: string,
    image: string,
    specialization: string,
    about: string,
    email: string,
}

const Employee: FC<IEmployeeProps> = ({name, image, specialization, about, email}) => {

    return(
        <div className="employee">
            <LazyImage className='employee__image' alt={name} skeletonClassName='employee__image-skeleton' src={image}  />
            
            <div className="employee__description">
                <span className="employee__specialization">{specialization}</span>
                <span className="employee__name">{name}</span>
                <span className="employee__about">{about}</span>
                <a href="#" className="employee__email">{email}</a>
            </div>
        </div>
    )
}

export default Employee;