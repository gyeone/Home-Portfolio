import '../styles/Project.css';

function Project() {
    return(
        <div className="project">
            <div className="project-1">
                <img style={{width: 200, height: 200, margin: 3}} src={require('../assets/images/dog.png')} art='dog'></img><a> 첫번 째 프로젝트</a>
            </div>

            <div className="project-2">
                <p>두번 째 프로젝트</p>
            </div>
           
        </div>
    ) 

}
export default Project;