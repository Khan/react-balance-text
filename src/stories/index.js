import React from 'react';
import {storiesOf} from '@storybook/react';
import BalanceText from '../index';

storiesOf('BalanceText', module)
    .add('Basic Text Balancing', () => {
        const text = 'Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.'; // eslint-disable-line

        return <div>
            <h2>Unbanalanced</h2>
            <p>{text}</p>
            <h2>Balanced</h2>
            <BalanceText>{text}</BalanceText>
        </div>;
    })
    .add('Handle Updates', () => {
        const hobbits = 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit aacute; de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.'; // eslint-disable-line
        const elves = 'Elen sila lumenn omentilmo, Nae saian luume\'. Cormamin lindua ele lle. Saesa omentien lle, vanya sulie Namaarie. Aa\' lasser en lle coia orn n\' omenta gurtha. Aa\' i\'sul nora lanne\'lle. Aa\' menle nauva calen ar\' ta hwesta e\' ale\'quenle. Cormamin niuve tenna\' ta elea lle au\'. Lissenen ar\' maska\'lalaith tenna\' lye omentuva.'; // eslint-disable-line
        const dwarves = 'Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.'; // eslint-disable-line

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
                        <button
                            onClick={() => this.setState({text: hobbits})}
                        >
                            hobbits
                        </button>
                        <button
                            onClick={() => this.setState({text: elves})}
                        >
                            elves
                        </button>
                        <button
                            onClick={() => this.setState({text: dwarves})}
                        >
                            dwarves
                        </button>
                    </div>
                    <BalanceText style={textStyle}>
                        {this.state.text}
                    </BalanceText>
                </div>;
            }
        }
        return <Wrapper />;
    })
    .add('Window Resize', () => {
        const text = 'Cupcake ipsum dolor. Sit amet apple pie danish tootsie roll bear claw tootsie roll wafer ice cream. Dessert cake croissant croissant chocolate. Cupcake gummi bears powder bonbon bonbon tootsie roll pie. Cupcake wafer icing sweet danish sweet roll cookie. Marshmallow cookie jelly-o pastry candy powder. Donut icing brownie apple pie jujubes lemon drops croissant candy canes toffee. Halvah wafer cheesecake powder sweet roll. Donut tootsie roll marzipan jelly beans gingerbread. Sweet roll tiramisu dessert chocolate bar. Bonbon pastry chocolate. Fruitcake muffin lollipop marzipan ice cream jujubes cake tootsie roll jelly beans.'; // eslint-disable-line

        return <div>
            <h2>Resize the Browser window to see automatic re-flowing</h2>
            <hr />

            <h3>Auto-resize (default)</h3>
            <BalanceText>{text}</BalanceText>

            <h3>Auto-resize disabled</h3>
            <BalanceText resize={false}>{text}</BalanceText>
        </div>;
    })
    .add('Nested Children', () => {
        const text = 'Lucas ipsum dolor sit amet chewbacca darth c-3p0 ackbar skywalker moff skywalker owen fett organa. Kenobi mon lando ewok. Jade watto dagobah gamorrean mon kashyyyk. Mara k-3po moff hoth. Boba zabrak padmé calamari qui-gon ben. Fisto yavin mara coruscant windu lars mace boba wicket. Vader yavin solo darth jade hutt jango. Watto darth organa hutt maul skywalker antilles. Fett moff antilles organa. Naboo ponda grievous fett. Mothma amidala antilles wookiee c-3po darth antilles windu. Kessel calamari hutt luuke tusken raider skywalker qui-gon.'; // eslint-disable-line

        return <BalanceText>
            <strong>{text}</strong>
        </BalanceText>;
    })
    .add('Passing className', () => {
        const css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".make-red { color: red }";
        document.body.appendChild(css);

        return <BalanceText className="make-red">
            This should be red
        </BalanceText>;
    });
