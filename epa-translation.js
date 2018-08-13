(function(w,d)
{
    d.addEventListener('DOMContentLoaded', ()=>
    {
        let dictionaryName = "anonymous"
        ,   editedEl;

        const scopeSelector = "epa-translation"
        ,  $conf = getConfigNode()
        ,    css = `    { position:absolute; right:1em; top:0; text-align:right; z-index:10; }
                        form,
                        #epa-translation-visibility{ display:none; }
                        #epa-translation-visibility:checked ~form { display:block; }
                        form,
                        >label{background-color: white; margin:0; padding: 0.5em; }
                        form{ border: 2px silver solid; border-radius: 0.2em;  }
                        form>label{display:block;}
                   `.split('\n').map( s => s.trim() && `${scopeSelector} ${s}` ).join('\n')
        ,   html = `<style> *[contentEditable=true],
                            *[contentEditable=true] *[contentEditable=false]{background-color:aqua}
                            *[contentEditable=true]:focus{background-color:aquamarine}
                            /**[contentEditable=false] *:focus{background-color:aquamarine}*/
                            ${css}
                    </style>
                    <input type="checkbox" id="epa-translation-visibility" />
                    <label for="epa-translation-visibility">&#x1F3F3; Languages</label>
                    <form>
                        <label 
                            class="epa-translation-edit"
                            accesskey="t" 
                    title="Trigger Translation Editor mode
                    ALT+T or CTRL+ALT+T"
                        ><input type="checkbox"/> <u><b>T</b></u>ranslation editor mode </label>
                        <label class="epa-trans-props-lang"> Language <input type="text" value="unknown"/></label>
                        <label class="epa-trans-props-dict"> Dictionary URL <input type="text" placeholder="" /></label>
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
            document.body[ bEnable? 'addEventListener': 'removeEventListener']( 'blur' , blurInEditMode,true );
            bEnable || document.body.querySelectorAll('*[contentEditable]').forEach( el=> el.removeAttribute('contentEditable'));
        }
            function
        clickInEditMode(ev)
        {
            let el = ev.target;
            const elChanged = el !== editedEl;
            elChanged && clearContentEditable( editedEl );
            editedEl = el;
            let t = el.origText;
            if( !t )
                el.origText = el.innerText;
            el.contentEditable = "true";
            if( el.children )
                for( let c of el.children )
                    c.contentEditable = "false";
            while( el = el.parentNode )
                if( el.isContentEditable )
                    el.contentEditable = "false";
            // if( elChanged )
            //     ev.preventDefault();
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
        blurInEditMode(ev)
        {
            clearContentEditable(ev.target)
        }
            function
        clearContentEditable( el )
        {   if( !el )
                return;
            if( el.origText && el.innerText === el.origText )
                el.contentEditable = "inherit";
            if( el.children )
                for( let c of el.children )
                    c.contentEditable = "false";
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