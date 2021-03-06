import { useState, useEffect } from 'react';

let cachedScripts = {};
function useScript(src) {
  // Keeping track of script loaded and error state
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(
    () => {
      const onScriptLoad = () => {
        cachedScripts[src].loaded = true;
        setState({
          loaded: true,
          error: false
        });
      };

      const onScriptError = () => {
        // Remove it from cache, so that it can be re-attempted if someone tries to load it again
        delete cachedScripts[src];

        setState({
          loaded: true,
          error: true
        });
      };

      let scriptLoader = cachedScripts[src];
      if(scriptLoader) { // Loading was attempted earlier
        if(scriptLoader.loaded) { // Script was successfully loaded
          setState({
            loaded: true,
            error: false
          });
        } else { //Script is still loading
          let script = scriptLoader.script;
          script.addEventListener('load', onScriptLoad);
          script.addEventListener('error', onScriptError);
          return () => {
            script.removeEventListener('load', onScriptLoad);
            script.removeEventListener('error', onScriptError);
          };
        }
      } else {
        // Create script
        let script = document.createElement('script');
        script.src = src;
        script.async = true;

        // Script event listener callbacks for load and error


        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        // Add script to document body
        document.body.appendChild(script);

        cachedScripts[src] = {loaded:false, script};

        // Remove event listeners on cleanup
        return () => {
          script.removeEventListener('load', onScriptLoad);
          script.removeEventListener('error', onScriptError);
        };
      }
    },
    [src] // Only re-run effect if script src changes
  );

  return [state.loaded, state.error];
}

export default useScript;