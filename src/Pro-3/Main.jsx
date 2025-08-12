import { BrowserRouter,Routes,Route, useNavigate } from 'react-router';
import MondaySchedule from './MondaySchedule';
import TuesdaySchedule from './TuesdaySchedule';
import WednesdaySchedule from './WednesdaySchedule';
import ThursdaySchedule from './ThursdaySchedule';              
import FridaySchedule from './FridaySchedule';
import SaturdaySchedule from './SaturdaySchedule';
import SundaySchedule from './SunSchedule';
import MonMenu from './MonMenu';
import TueMenu from './TueMenu';
import WedMenu from './WedMenu';
import FriMenu from './FriMenu';
import SaturdayMenu from './SatMenu';
import SundayMenu from './SunMenu';
import ThuMenu from './ThuMenu';
import MainPage from './MainPage';
import HomePage from './HomePage';
import Login from './Loginpr3';
import SignUppr3 from './SignUppr3';
import NutraFitChat from './NutraFitChat';
import RegistrationForm from './RegistrationForm';
import Cc from './Cc.jsx';
import NutraFitRecipes from './RecepieMenu.jsx'
import VegetableSambar from './VegSambar';
import PaneerTikka from './PaneerTika';
import Rajma from './RajmaRecepie';
import SoyaCurry from './Soya';
import PaneerBhurji from './PannerBurji';
import KadahiPaneer from './KP';
import ChickenTikka from './CT';
import EggCurry from './EC';
import Prawns from './Prwans';
import ButterChicken from './BC';
import ChickenSukka from './CS';
import ChickenParmesan from './CP';
function Default() {
    return(

        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUppr3 />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/monday" element={<MondaySchedule />} />
            <Route path="/tuesday" element={<TuesdaySchedule />} />
            <Route path="/wednesday" element={<WednesdaySchedule />} />
            <Route path="/thursday" element={<ThursdaySchedule />} />   
            <Route path="/friday" element={<FridaySchedule />} />
            <Route path="/saturday" element={<SaturdaySchedule />} />
            <Route path="/sunday" element={<SundaySchedule />} />
            <Route path="/monmenu" element={<MonMenu />} />
            <Route path="/tuesdaymenu" element={<TueMenu />} />
            <Route path="/wednesdaymenu" element={<WedMenu />} />
            <Route path="/thursdaymenu" element={<ThuMenu />} />
            <Route path="/fridaymenu" element={<FriMenu />} />
            <Route path="/saturdaymenu" element={<SaturdayMenu />} />
            <Route path='/sundaymenu' element={<SundayMenu />} />
            <Route path="/nutrafitchat" element={<NutraFitChat />} />
            <Route path='/form' element={<RegistrationForm/>}/>
            <Route path="/cc" element={<Cc />} />
            <Route path='/recMenu' element={<NutraFitRecipes/>}/>
            <Route path='/vegsam' element={<VegetableSambar/>}/>
            <Route path='/pannert' element={<PaneerTikka/>}/>
            <Route path='/rajma' element={<Rajma/>}/>
            <Route path='/soya' element={<SoyaCurry/>}/>
            <Route path='/PB' element={<PaneerBhurji/>}/>
            <Route path='/KP' element={<KadahiPaneer/>}/>
            <Route path='/CT' element={<ChickenTikka/>}/>
            <Route path='/EC' element={<EggCurry/>}/>
            <Route path='/Praw' element={<Prawns/>}/>
            <Route path='/BC' element={<ButterChicken/>}/>
            <Route path='/CS' element={<ChickenSukka/>}/>
            <Route path='/CP' element={<ChickenParmesan/>}/>
        </Routes>
   
    )
}

export default Default;
