import '../styles/About.css'
import {iconList} from '../data/DataIconSkill'


function About() {
  return (
 
     <section id='about'>
         <div className="wrapper">
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, asperiores, veritatis accusamus corrupti, aspernatur nam ut magni accusantium quasi nisi consequatur quos tenetur. Iusto, doloribus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempora corrupti voluptatem cupiditate rem nulla!</p>

            <h4>Proggramming Languange And Tools</h4>
            {
               <div className="skills">
               {iconList.map((item) => {
                 const IconComponent = item.icon; // Mendapatkan komponen ikon
                 return (
                   <IconComponent key={item.id}/> 
                 );
               })}
             </div>
            }

         </div>
     </section>
  )
}

export default About