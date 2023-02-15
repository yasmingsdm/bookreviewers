import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Books from "./components/Books";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ButtonBook from "./components/ButtonBook";
import "./App.css"

const App = ()=>{

    const books=[
        {
            name: 'An invisible Thread',
            id: uuidv4(),
            image: 'https://m.media-amazon.com/images/I/41kT+1n5CKL._SY344_BO1,204,203,200_.jpg',
            description: 'She was a successful ad sales rep in Manhattan. He was a homeless, eleven-year-old panhandler on the street. He asked for spare change; she kept walking. But then something stopped her in her tracks, and she went back. And she continued to go back, again and again. They met up nearly every week for years and built an unexpected, life-changing friendship that has today spanned almost three decades.'
        },
        {
            name: 'The Notebook',
            id: uuidv4(),
            image: 'https://m.media-amazon.com/images/I/51J02DT6ULL._SY346_.jpg',
            description: 'At thirty-one, Noah Calhoun, back in coastal North Carolina after World War II, is haunted by images of the girl he lost more than a decade earlier. At twenty-nine, socialite Allie Nelson is about to marry a wealthy lawyer, but she cannot stop thinking about the boy who long ago stole her heart. Thus begins the story of a love so enduring and deep it can turn tragedy into triumph, and may even have the power to create a miracle . . .'
        },
        {
            name: "Harry Potter and the sorcerer's stone",
            id: uuidv4(),
            image: 'https://m.media-amazon.com/images/I/51SBx6jWilL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
            description: "Harry Potter's life changes forever on his eleventh birthday, when the giant with the beady black eyes Rubeus Hagrid hands him a letter and reveals amazing news: Harry Potter is not an ordinary boy, he is a wizard. He is about to start an extraordinary adventure..."

        },
        {
            name: "Handle with care",
            id: uuidv4(),
            image: 'https://m.media-amazon.com/images/I/51TUUDkNwYL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
            description: "Every expectant parent will tell you that they don't want a perfect baby, just a healthy one. Charlotte and Sean O'Keefe would have asked for a healthy baby, too, if they'd been given the choice. Instead their lives are made up of sleepless nights, mounting bills, the pitying stares of luckier parents, and, maybe worst of all, the what-ifs. What if their child had been born healthy? But it's all worth it because Willow is, funny as it seems, perfect. She's smart as a whip, on her way to being as pretty as her mother, kind, brave, and, for a five-year-old, an unexpectedly deep source of wisdom. Willow is Willow, in sickness and in health. Everything changes, though, after a series of events forces Charlotte and her husband to confront the most serious what-ifs of all. What if Charlotte had known earlier of Willow's illness? What if things could have been different? What if their beloved Willow had never been born? To do Willow justice, Charlotte must ask herself these questions and one more: What constitutes a valuable life?"
        }

    ]

    return <div>
        <Header />
        <main>
            <Books books={books} />
            <ButtonBook />
        </main>
        <Footer />
    </div>
}

export default App;