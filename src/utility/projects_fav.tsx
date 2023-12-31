import resep_asik from '@/assets/project_image/resep_asik.webp'
import digital_quran from '@/assets/project_image/digitial_quran.webp'
import sinar_asih from '@/assets/project_image/sinar_asih.webp'
import angga_store from '@/assets/project_image/anggastoe.webp'


// Icon 
import icon_assets from '@/assets/imported/icon_assets';const {nextjs,islamic,tailwind,mongodb,swr,vue,express,postgress,elephantsql,daisyui} = icon_assets


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
            image: angga_store,
            link: 'https://angga-store.vercel.app',
            title: "Clothing Store",
            desc: "create a clothing website with login and register features with formic and yup frontend validation ",
            project_detail:    ['React  ' + nextjs, 'Tailwinds  ' + tailwind, 'Express  ' + express, 'PostgreSQL  ' + postgress, 'ElephantSql ( Deploy )  ' + elephantsql,],
            clone: 'https://github.com/erlanggaht/angga_store'
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