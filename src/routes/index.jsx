import {For} from "solid-js/web";
import {createEffect, createResource, createSignal} from "solid-js";
import 'flowbite';
import "./style.css"
import {ParkplatzBox} from "~/components/Parkplatz.jsx"


const fetchUser = async () =>
    (await fetch(`http://localhost:8000/api/user`, {headers: {"Cache-Control": "max-age=0"
},
})).json();


function TableUserComponent() {
    //const [user] = createResource(userId, fetchUser);
    // const [user, setUser] = createSignal(fetchUser());
    //const [user] = createResource(userId, fetchUser);
    const [userId, setUserId] = createSignal();
    const [user, {mutate, refetch}] = createResource(fetchUser);
    //const [delay, setDelay] = createSignal(1000);

    return (
        <>
            <For each={user()}>{(user, i) =>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.UserID}                </th>
                    <td className="px-6 py-4">
                        {user.Benutzername}
                    </td>
                    <td className="px-6 py-4">
                        {user.Punkte}
                    </td>

                </tr>
            }</For>
        </>

    );
}


function TableUser() {


    return (


        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 sortable">
                        UserID
                    </th>
                    <th scope="col" class="px-6 py-3 sortable">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 sortable">
                        Score
                    </th>
                </tr>
                </thead>
                <tbody>
                <TableUserComponent/>
                </tbody>
            </table>
        </div>
    );

}
# chang

function ListUser() {


    const [user, setUser] = createSignal([
        {id: 'J---aiyznGQ', name: 'Keyboard Cat'},
        {id: 'z_AbfPXTKms', name: 'Maru'},
        {id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat'}
    ]);

    return (
        <ul>
            <For each={user()}>{(user, i) =>
                <li>
         <span>
               {i() + 1}: {user.name}
         </span>


                </li>
            }</For>
        </ul>
    );
}


export default function App() {
    return (
        <main>

            <TableUser></TableUser>
            <ParkplatzBox></ParkplatzBox>

        </main>
    );
}


