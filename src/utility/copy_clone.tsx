
export default async function copy_clone(text : string) {

    try {
        await navigator.clipboard.writeText(text)
        alert( '- ' + 'Copied to clipboard!' + ' - ' + ' \n\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + text  )
    } catch (error) {
        alert('sorry. not copy!')
    }

}
