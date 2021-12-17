import {NavLink, Link} from "react-router-dom"

function Sidebar(){
  return(
    <div className="sidebar">
      <svg className="sidebar__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 916.09 245.31">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M84.52,179.37a70.31,70.31,0,0,0,45-15.72,70,70,0,0,0,25.28-39.45h12.42a82.54,82.54,0,0,1-29,48,82.09,82.09,0,0,1-53.63,19.23q-34.95,0-59.79-24.84T0,106.94Q0,72,24.73,47.26T84.52,22.42a82,82,0,0,1,53.63,19.24,82.49,82.49,0,0,1,29,48H154.75a70,70,0,0,0-25.28-39.45A70.31,70.31,0,0,0,84.52,34.51q-30,0-51.22,21.21T12.09,106.94q0,30,21.21,51.22T84.52,179.37Z"/>
            <path d="M262,22.2a72.38,72.38,0,0,1,18.58,2.42V37.15a59.72,59.72,0,0,0-18.58-3,57.74,57.74,0,0,0-42.53,17.7,58.1,58.1,0,0,0-17.7,42.64V185.2H189.7V94.52q0-29.89,21.21-51.11T262,22.2Z"/>
            <path d="M374.46,22.31q32.87,0,57,22.31,24.08,22.1,27,54.41.43,4.5.44,7.8l-.11,2.2-.11,2.09H302.25a70.13,70.13,0,0,0,22.42,48.36,72.33,72.33,0,0,0,89.9,7.58,71.13,71.13,0,0,0,26.16-31.32h12.86a83.21,83.21,0,0,1-30.33,39.89,81.68,81.68,0,0,1-48.8,15.72q-34.95,0-59.79-24.84t-24.73-59.68q0-34.95,24.73-59.68T374.46,22.31Zm72,76.72A70.42,70.42,0,0,0,423,53.09,72.41,72.41,0,0,0,302.47,99Z"/>
            <path d="M553.83,22.2a72.25,72.25,0,0,1,18.57,2.42V37.15a59.62,59.62,0,0,0-18.57-3,57.75,57.75,0,0,0-42.54,17.7A58.09,58.09,0,0,0,493.6,94.52V185.2H481.51V94.52q0-29.89,21.21-51.11T553.83,22.2Z"/>
            <path d="M594.38,28.25h12.09v157H594.38Z"/>
            <path d="M729.35,181.46a62.23,62.23,0,0,1-77.05-8.57Q634,154.64,634,129V0h12.2V28.25h83.2V40.34h-83.2V129a49.89,49.89,0,0,0,83.2,37.15Z"/>
            <path d="M916.09,28.25V162.44q-.45,33.75-24.84,58-24.74,24.83-59.69,24.83t-59.79-24.83a83.18,83.18,0,0,1-9.34-10.78l9.56-7.58a89.86,89.86,0,0,0,8.36,10q21.21,21,51.21,21t51.22-21Q904,190.81,904,162v-8.24a80,80,0,0,1-28.36,27.37,77.81,77.81,0,0,1-39.13,10.33q-33,0-56.38-23.3t-23.3-56.27V28.25h12.09v83.64q0,27.92,19.78,47.7t47.81,19.89q27.81,0,47.59-19.78T904,112V28.25Z"/>
            <circle cx="87.32" cy="106.61" r="27.57"/>
            <circle className="cls-1" cx="77.62" cy="105.59" r="11.57"/>
          </g>
        </g>
      </svg>

      <ul className="sidebar__links">
        {/* <li className="sidebar__links--link"><a href=""><i class="fas fa-history"></i>Recent</a></li> */}
        <li className="sidebar__links--link"><Link to="/"><i class="fas fa-key"></i>Passwords</Link></li>
        <li className="sidebar__links--link"><Link to="/folders"><i class="fas fa-folder"></i>Folders</Link></li>
      </ul>

      <div className="sidebar__profile">
        <p className="name"><i class="far fa-user-circle"></i>Mehul</p>
      </div>
    </div>
  )
}

export default Sidebar
