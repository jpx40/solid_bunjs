import "./Parkplatz.css";
import {createResource, createSignal} from "solid-js";

const fetchParkplatz = async () =>
    (await fetch(`http://127.0.0.1:8000/api/parkplatz`)).json();


function Parkbox(prob) {


    return (<div class="box">
            {prob.nr}


        </div>
    );

}

function Street(prob) {


    return (<div className="street">
            street


        </div>
    );

}


function Rasen(){

    return (<div className="gras">
            gras


        </div>
    );
}




export function ParkplatzBox() {
    const [Parkplatz, setParkplatz] = createSignal();

    const [park, {mutate, refetch}] = createResource(fetchParkplatz);

    const test = () => park();
console.log(test());
    return (
        <>
            <div className="container">

                <Parkbox nr="1" />
                <Street/>

                <Parkbox nr="2"/>

                <Parkbox nr="3"/>
                <Street/>
                <Parkbox nr="4"/>



                <Parkbox nr="5"/>
                <Street/>
                  <Parkbox nr="6"/>

             <Rasen/>
                <Street/>
                 <Rasen/>
                     <Parkbox nr="7"/>


                <Street/>

                     <Parkbox nr="8"/>

                <Parkbox nr="9"/>
                <Street/>
  <Parkbox nr="10"/>






            </div>

        </>);
}