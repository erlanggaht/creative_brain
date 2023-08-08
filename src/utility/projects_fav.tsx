import resep_asik from '@/assets/resep_asik.png'
import digital_quran from '@/assets/digitial_quran.png'
import catatan_sumbangan from '@/assets/catatan-sumbangan.png'
import sinar_asih from '@/assets/sinar_asih.png'


// Icon 
import nextjs from '@/assets/nextjs.svg'
import tailwind from '@/assets/tailwind.svg'
import islamic from '@/assets/islamic.png'
import mongodb from '@/assets/mongodb.svg'
import swr from '@/assets/swr.png'
import vue from '@/assets/vuejs.svg'
import express from '@/assets/express.svg'
import postgress from '@/assets/postgresql.svg'
import elephantsql from '@/assets/elephtansql.svg'
import daisyui from '@/assets/daisyui.svg'


// Note beri spasi 2 kali pada value project detail -> value arrray stack title


export default function projects_fav(): any {
    return [
        {
            image: digital_quran,
            link: 'https://bacaquran-v2.vercel.app/',
            title: "Digital Reading & Audio Quran",
            desc: "Let's read the Koran while in the grip of a digital gadget.",
            project_detail: ['Nextjs13  ' + nextjs, 'Tailwinds  ' + tailwind, 'Kementrian Agama Indonesia ( API )  ' + islamic, 'MongoDB ( Guest Book )  ' + mongodb, "SWR ( React Hook Data Fetching )  " + swr ], 
            
            clone: 'https://github.com/erlanggaht/WebQuranV2'
        },
        {
            image: resep_asik,
            link: 'https://resep-asik.vercel.app',
            title: "Food Recipes",
            desc: "Find lots of food recipes. This website is made with Vuejs + Bootstrap css library",
            project_detail:['VueJs  ' +  vue , 'Vuex  ' + vue, 'Tailwinds  ' + tailwind],
            clone: 'https://github.com/erlanggaht/resep-asik.vue.git'
        },
        {
            image: catatan_sumbangan,
            link: 'https://catatan-sumbangan.vercel.app',
            title: "Donation Record",
            desc: "Donation record web. write receipts and expenses with the CRUD system and display them in the table. it's built with vuejs + postgresql",
            project_detail:    ['VueJs  ' + vue, 'Tailwinds  ' + tailwind, 'Express  ' + express, 'PostgreSQL  ' + postgress, 'ElephantSql ( Deploy )  ' + elephantsql,],
            clone: 'https://github.com/erlanggaht/catatan-sumbangan/'
        },

        {
            image: sinar_asih,
            link: 'https://sinarasih.vercel.app/',
            title: "Gadgets Company Profile",
            desc: "The gadget company profile website is created with nextJs and the server uses postgresql as the employee profile database",
            project_detail: ['Nextjs13  ' + nextjs, 'Tailwinds  ' + tailwind , 'PostgreSQL  ' + postgress, "DaisyUI ( Library Tailwind Component )  " + daisyui],
            clone: 'https://github.com/erlanggaht/landing_SAS'
        }
    ]
}