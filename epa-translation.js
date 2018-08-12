(function(w,d)
{
    d.addEventListener('DOMContentLoaded', ()=>
    {
        let dictionaryName = "anonymous"
        ,   editedEl;

        const scopeSelector = "epa-translation"
        ,  $conf = getConfigNode()
        ,    css = `    
                        form>*{ display:block }
                        
                   `.split('\n').map( s => s.trim() && `${scopeSelector} ${s}` ).join('\n')
        ,   html = `<style> *[contentEditable]{background-color:aqua}
                            *[contentEditable]:focus{background-color:aquamarine}
                            #epa-translation-visibility{ display:none; }
                            ${css}
                    </style>
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
        $conf.innerHTML = html;
        $on( $conf,'.epa-translation-edit', 'change', ev => setEditorMode( ev.target.checked ) );
    // use MutationObserver for 'epa-translation,.epa-translation' changes

            function
        setEditorMode( bEnable )
        {
            document.body[ bEnable? 'addEventListener': 'removeEventListener']( 'click',clickInEditMode,true );
            document.body[ bEnable? 'addEventListener': 'removeEventListener']( 'input',inputInEditMode,true );
            bEnable || document.body.querySelectorAll('*[contentEditable]').forEach( el=> el.removeAttribute('contentEditable'));
        }
            function
        clickInEditMode(ev)
        {   const el = ev.target;
            // if( el.childElementCount )
            //     return;
            editedEl = el;
            let t = el.origText;
            if( !t )
                el.origText = el.innerText;
            el.contentEditable = "true";
        }
            function
        inputInEditMode(ev)
        {
            const el = ev.target
            ,    txt = el.innerText;
            if( txt === el.origText || txt === el.savedText )
                return;
            localStorage.setItem( getStorageKey(el.origText), el.savedText=txt );
        }
            function
        getStorageKey( txt )
        {
            return `epa-translation|${dictionaryName}|${txt}`;
        }
            function
        getConfigNode()
        {
            const translations = d.getElementsByTagName('epa-translation');
            return translations[0] || d.body.appendChild( document.createElement('epa-translation') );
        }
    });

        function
    $on(  el, css, event, cb )
    {
       el.querySelector(css).addEventListener( event, cb );
    }
})(window,document);