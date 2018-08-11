console.log('epa-translation.js loaded');
document.addEventListener('DOMContentLoaded', ()=>
{
    const translations = document.getElementsByTagName('epa-translation');
    if( !translations.length )
        document.body.appendChild( document.createElement('epa-translation') );

    const scopeSelector = "epa-translation"
    ,    css =`
    form>*{ display:block }
    `.split('\n').map( s => s.trim() && `${scopeSelector} ${s}` ).join('\n');
    translations[0].innerHTML =
`<style>${css}</style>
<input type="checkbox" id="epa-translation-visibility" />
<label for="epa-translation-visibility">&#x1F3F3; Languages</label>
<form>
    <label> Vocabulary URL <input type="text" /></label>
    <label 
        class="epa-translation-edit"
        accesskey="t" 
title="Trigger Translation Editor mode
ALT+T or CTRL+ALT+T"
    ><input type="checkbox"/> <u><b>T</b></u>ranslation editor mode </label>
</form>
`;
// use MutationObserver for 'epa-translation,.epa-translation' changes
    function applyTranslations()
    {

    }
});