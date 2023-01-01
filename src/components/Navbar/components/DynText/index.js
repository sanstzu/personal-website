import * as React from 'react';




export default function DynText(props) {
    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const aliases = props.aliases;
    const duration = props.duration;
    const offset_time = props.offset_time;
    const ani_time = props.animation_time;
    const alias_size = aliases.length;
    
    const [alias, setAlias] = React.useState('');
    React.useEffect( () => {
        var rise = 1;
        var word = '';
        var cur = 0;
        var cur_idx = 0;
        var cur_len = aliases[cur].length;
        const update = async function(){ 
            while(1){
                
                if(rise == 1){
                    word += aliases[cur][cur_idx];
                    setAlias(word);
                    if(cur_idx == cur_len - 1){
                        rise = 0;
                        await sleep(duration);
                    } else {
                        cur_idx++;
                    }
                } else {
                    word = word.slice(0,-1);
                    setAlias(word);
                    if(cur_idx < 1){
                        rise = 1;
                        cur = (cur + 1)%aliases.length;
                        cur_len = aliases[cur].length;
                        
                    } else {
                        cur_idx--;
                    }
                }
                await sleep(ani_time/cur_len);
            }
        }
        update();
    }, []);
    
    return (
        <span className={props.className}>
            <span>{alias}</span>
            <span id="cursor">&nbsp;</span>
        </span>
   );
}