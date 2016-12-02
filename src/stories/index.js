import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BalanceText from '../index';

storiesOf('BalanceText', module)
  .add('Basic Text Balancing', () => {
    const text = `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.`
    
    return <div>
      <h2>Unbanalanced</h2>
      <p>{text}</p>
      <h2>Balanced</h2>
      <BalanceText>{text}</BalanceText>
    </div>
  })
  .add('Handle Updates', () => {
    const hobbits = `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit aacute; de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.`;
    const elves = `Elen sila lumenn omentilmo, Nae saian luume'. Cormamin lindua ele lle. Saesa omentien lle, vanya sulie Namaarie. Aa' lasser en lle coia orn n' omenta gurtha. Aa' i'sul nora lanne'lle. Aa' menle nauva calen ar' ta hwesta e' ale'quenle. Cormamin niuve tenna' ta elea lle au'. Lissenen ar' maska'lalaith tenna' lye omentuva.`;
    const dwarves = `Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.`;
    
    const textStyle = {
      padding: '1em',
      textAlign: 'center',
    };

    class Wrapper extends React.Component {
      constructor() {
        super();
        this.state = {text: hobbits};
      }

      render() {
        return <div>
          <div>
            <button onClick={() => this.setState({text: hobbits})}>hobbits</button>
            <button onClick={() => this.setState({text: elves})}>elves</button>
            <button onClick={() => this.setState({text: dwarves})}>dwarves</button>
          </div>
          <BalanceText style={textStyle}>{this.state.text}</BalanceText>
        </div>;
      }
    }

    return <Wrapper />;

  });