import resep_asik from '@/assets/resep_asik.png'
import digital_quran from '@/assets/digitial_quran.png'
import catatan_sumbangan from '@/assets/catatan-sumbangan.png'
import seblaks from '@/assets/seblaks.png'


export default function projects_fav(): any {
    return [
        {
            image: digital_quran,
            link: 'https://bacaquran-v2.vercel.app/',
            title: "Digital Reading & Audio Quran",
            desc: "Let's read the Koran while in the grip of a digital gadget.",
            project_detail: ['Nextjs13', 'Tailwinds', 'Kementrian Agama Indonesia ( API )', 'MongoDB ( Guest Book )', "SWR ( React Hook Data Fetching )",],
            clone: 'https://github.com/erlanggaht/WebQuranV2'
        },
        {
            image: resep_asik,
            link: 'https://resep-asik.vercel.app',
            title: "Food Recipes",
            desc: "Find lots of food recipes. This website is made with Vuejs + Bootstrap css library",
            project_detail: ['VueJs', 'Vuex', 'Tailwinds'],
            clone: 'https://github.com/erlanggaht/resep-asik.vue.git'
        },
        {
            image: catatan_sumbangan,
            link: 'https://catatan-sumbangan.vercel.app',
            title: "Donation Record",
            desc: "Donation record web. write receipts and expenses with the CRUD system and display them in the table. it's built with vuejs + postgresql",
            project_detail: ['VueJs', 'Tailwinds', 'Express', 'PostgreSQL', 'ElephantSql ( Deploy )',],
            clone: 'https://github.com/erlanggaht/catatan-sumbangan/'
        },

        {
            image: seblaks,
            link: 'https://seblaks.vercel.app/',
            title: "Seblak Food Website",
            desc: "The spicy food website, Seblak, is made using NextJS and DaisyUI technology and auth from Firebase",
            project_detail: ['Nextjs13', 'Tailwinds', 'Firebase DB Realtime ', "DaisyUI ( Library Tailwind Component )",],
            clone: 'https://github.com/erlanggaht/web_seblak/'
        }
    ]
}