
export default async function copy_clone(text : string) {

    try {
        await navigator.clipboard.writeText(text)
        alert( '" ' + text + ' "' + ' \n\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0copied to clipboard! '  )
    } catch (error) {
        alert('sorry. not copy!')
    }

}
