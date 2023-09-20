import Counter from "~/components/Parkplatz";
import {A} from "solid-start";
import {For, render} from "solid-js/web";
import {createSignal} from "solid-js";
import 'flowbite';
import {createResource} from "solid-js";
import {Component} from "solid-js";
import createTimeoutLoop from "@solid-primitives/timer"
import {lodash} from "lodash/seq.js";
import {sortBy} from "lodash/collection.js";
import "./style.css"
import {ParkplatzBox} from "~/components/Parkplatz.jsx"


const fetchUser = async () =>
    (await fetch(`http://127.0.0.1:8000/api/user`)).json();




function TableUserComponent() {
    //const [user] = createResource(userId, fetchUser);
    // const [user, setUser] = createSignal(fetchUser());
    //const [user] = createResource(userId, fetchUser);
    const [userId, setUserId] = createSignal();

    const [user, {mutate, refetch}] = createResource(fetchUser);
    const [delay, setDelay] = createSignal(1000);


  //  let userList = sortBy(user(), ["username", "punkte"]);


    return (
        <>
            <For each={user()}>{(user, i) =>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.UserID}                </th>
                    <td className="px-6 py-4">
                        {user.username}
                    </td>
                    <td className="px-6 py-4">
                        {user.punkte}
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
                    <th scope="col" class="px-6 py-3">
                        UserID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Score
                    </th>
                </tr>
                </thead>
                <tbody>
                <TableUserComponent></TableUserComponent>
                </tbody>
            </table>
        </div>
    );

}


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


