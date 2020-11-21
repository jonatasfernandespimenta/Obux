import React from 'react'
import styled from 'styled-components'
import { withKnobs, select } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'

import { Box, Text } from '../..'
import { Caption, CardTitle, SmallText, H1, H2, H3, H4, H5, Header } from './index'
import { Button } from '../button'
import StoryWrapper from '../../utils/story-wrapper'

export default { title: 'DesignSystem/Atoms/Typography', decorators: [withKnobs] }

const BoxWithPaddings = styled(Box)`
  background: rgba(66,104,246,.3);
  & > * {
    background: #fff;
  }

  & > ${Text} {
    height: 60px;
  }
`

export const Headers: React.FC = () => (
  <StoryWrapper label="Headers with paddings">
    <BoxWithPaddings bg="white">
      <div style={{ height: 0, opacity: 0 }}>div</div>
      <Header.H1>H1 Header - 40</Header.H1>
      <Text variant="sm" mb={5}>Roboto 40 - line height - 40</Text>
      <Header.H2>H2 Header - 32</Header.H2>
      <Text variant="sm" mb={5}>Roboto 32 - line height - 40</Text>
      <Header.H3>H3 Header - 28</Header.H3>
      <Text variant="sm" mb={5}>Roboto 28 - line height - 32</Text>
      <Header.H4>H4 Header - 24</Header.H4>
      <Text variant="sm" mb={5}>Roboto 24 - line height - 32</Text>
      <Header.H5>H5 Header - 18</Header.H5>
      <Text variant="sm" mb={5}>Roboto 18 - line height - 24</Text>
      <Header.H6>H6 Header - 16</Header.H6>
      <Text variant="sm" mb={5}>Roboto 16 - line height - 24</Text>
    </BoxWithPaddings>
  </StoryWrapper>
)

const TextStory: React.FC = () => {
  const variant = select('Variant', {
    'Extra Small [xs]': 'xs',
    'Small [sm]': 'sm',
    'Large [lg]': 'lg',
  }, 'lg')
  return (
    <StoryWrapper label="Example Text container">
      <Text variant={variant}>
        Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Est enim effectrix
        multarum et magnarum voluptatum. Omnia contraria, quos etiam insanos esse vultis. Quid,
        de quo nulla dissensio est? Egone quaeris, inquit, quid sentiam? Duo Reges:
        constructio interrete. Sed in rebus apertissimis nimium longi sumus.
        <Button as="a">Button inside the text</Button>
      </Text>
    </StoryWrapper>
  )
}

export const ContentStory: React.FC = () => (
  <StoryWrapper label="Example styled content inside Text component">
    <Box p="x4">
      <Text>
        <h1>Hello World</h1>
        <h2>Some header 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
          eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
          vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel
          interdum mattis neque.
        </p>
        <ol>
          <li>interdum mattis neque.</li>
        </ol>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
          Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium
          urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus
          facilisis. Donec at dignissim dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
        <blockquote>
          And here it comes - the quote
        </blockquote>
        <h5>Header H5</h5>
        <pre>
          const a = 1;{'\n'}
          const b = 0;
        </pre>
        <p>And below there is a Table</p>
        <table>
          <thead>
            <tr><th>Name</th><th>Surname</th></tr>
          </thead>
          <tbody>
            <tr><td>Wojtek</td><td>Krysiak</td></tr>
            <tr><td>Joseph</td><td>Grad</td></tr>
          </tbody>
        </table>
        <p>text goes on...</p>
      </Text>
    </Box>
  </StoryWrapper>
)

export { TextStory as Text }

export const Example: React.FC = () => (
  <StoryWrapper label="Example content page">
    <Box p="x4" bg="white">
      <H1>H1. Nam de isto magna dissensio est.</H1>
      <H2>H2. Sed in rebus apertissimis nimium</H2>
      <Text>
        Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Est enim effectrix
        multarum et magnarum voluptatum. Omnia contraria, quos etiam insanos esse vultis. Quid,
        de quo nulla dissensio est? Egone quaeris, inquit, quid sentiam? Duo Reges:
        constructio interrete. Sed in rebus apertissimis nimium longi sumus.
      </Text>

      <Text>
        Text. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest.
        Beatus autem esse in maximarum rerum timore nemo potest. Inquit, respondet: Quia, nisi
        quod honestum est, nullum est aliud bonum! Non quaero iam verumne sit; Aut, Pylades cum
        sis, dices te esse Orestem, ut moriare pro amico? Non prorsus, inquit, omnisque, qui sine
        dolore sint, in voluptate, et ea quidem summa, esse dico. Addidisti ad extremum
        etiam indoctum fuisse. Apparet statim, quae sint officia, quae actiones.
        Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum;
      </Text>

      <H3>H3. Vitae autem degendae ratio maxime quidem illis placuit quieta.</H3>

      <Text>
        Text. Hanc se tuus Epicurus omnino ignorare dicit quam aut qualem esse velint qui honestate
        summum bonum metiantur. Idem iste, inquam, de voluptate quid sentit? Quid interest,
        nisi quod ego res notas notis verbis appello, illi nomina nova quaerunt, quibus idem dicant?
        Etsi ea quidem, quae adhuc dixisti,

      </Text>

      <H4>H4. quae senserit ille, tibi non vera videantur.</H4>
      <Text>
        quam dicat Epicurus voluptatem. Iubet igitur nos Pythius Apollo noscere
        nosmet ipsos. Dicam, inquam, et quidem discendi causa magis, quam quo te aut
        Epicurum reprehensum velim.
      </Text>
      <H4>H4. Dicam, inquam, et quidem discendi causa magis.</H4>
      <Text>
        quamvis ad aetatem recte isto modo dicerentur. In
        quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Nam illud
        quidem adduci vix possum, ut ea,
        Nihil enim iam habes, quod ad corpus referas; Itaque hoc frequenter dici solet a vobis,
        non intellegere nos,
      </Text>
      <Text>
        Text. Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Quarum ambarum
        rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Obscura, inquit,
        quaedam esse confiteor, nec tamen ab illis ita dicuntur de industria, sed inest in
        rebus ipsis obscuritas. Cuius similitudine perspecta in formarum specie ac dignitate
        transitum est ad honestatem dictorum atque factorum. Atque ut a corpore ordiar,
      </Text>
      <H5>H5. Mortuus. Quae cum magnifice primo</H5>
      <Text>
        Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Deinde disputat,
      </Text>
      <H5>H5. Honestate summum bonum metiantur</H5>
      <Text>
        quod cuiusque generis animantium statui deceat extremum. Ita multo sanguine profuso in
      </Text>
      <H5>H5. In alia summum bonum ponere? Cum </H5>
      <Text>
        laetitia et in victoria est mortuus. Quae cum magnifice primo dici viderentur, considerata
      </Text>
      <Text>
        minus probabantur. Hanc se tuus Epicurus omnino ignorare dicit quam aut qualem esse velint
        qui honestate summum bonum metiantur. Qui igitur convenit ab alia voluptate dicere naturam
        proficisci, in alia summum bonum ponere? Cum sciret confestim esse moriendum eamque mortem
      </Text>
      <Text>
        ardentiore studio peteret, quam Epicurus voluptatem petendam putat.
      </Text>

      <Text>
        Text. Sed tu istuc dixti bene Latine, parum plane. His similes sunt omnes, qui virtuti
        studentlevantur vitiis, levantur erroribus, nisi forte censes Ti. Verum hoc loco
        sumo verbis his
        eandem certe vim voluptatis Epicurum nosse quam ceteros. An dubium est, quin virtus ita
        maximam partem optineat in rebus humanis, ut reliquas obruat? Quo studio Aristophanem
        putamus aetatem in litteris duxisse? Vides igitur te aut ea sumere, quae non concedantur,
        aut ea, quae etiam concessa te nihil iuvent.
      </Text>

      <H2>H2. Audeo dicere, inquit.</H2>

      <Text>
        Text. Nulla profecto est, quin suam vim retineat a primo ad extremum. Video equidem, inquam,
        sed tamen iam infici debet iis artibus, quas si, dum est tener, conbiberit, ad maiora veniet
        paratior. Sed alii dolore moventur, alii cupiditate, iracundia etiam multi effetuntur et,
        cum in mala scientes inruunt, tum se optime sibi consulere arbitrantur. Hoc igitur
        quaerentes omnes, et ii, qui quodcumque in mentem veniat aut quodcumque occurrat se sequi
        dicent, et vos ad naturam revertemini. Et si in ipsa gubernatione neglegentia est navis
        eversa, maius est peccatum in auro quam in palea. Aut pertinacissimus fueris, si in eo
        perstiteris ad corpus ea, quae dixi, referri, aut deserueris totam Epicuri voluptatem, si
        negaveris.
      </Text>

      <Text>
        Text. Age, inquies, ista parva sunt. Etiam inchoatum, ut, si iuste depositum reddere
        in recte
        factis sit, in officiis ponatur depositum reddere; Haec quo modo conveniant, non sane
        intellego. At certe gravius.
      </Text>

      <Text>
        Text. Istam voluptatem perpetuam quis potest praestare sapienti? Nihil enim arbitror esse
        magna laude dignum, quod te praetermissurum credam aut mortis aut doloris metu. Et certamen
        honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio.
        Consequens enim est et post oritur, ut dixi. Hoc dictum in una re latissime patet, ut
        in omnibus factis re, non teste moveamur. Nec enim, dum metuit, iustus est, et certe, si
        metuere destiterit, non erit; Sin laboramus, quis est, qui alienae modum statuat
        industriae? Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Quos
        quidem dies quem ad modum agatis et in quantam hominum facetorum urbanitatem incurratis,
        non diconihil opus est litibus-; Ita, quem ad modum in senatu semper est aliquis, qui
        interpretem postulet, sic, isti nobis cum interprete audiendi sunt.
      </Text>
    </Box>
  </StoryWrapper>
)

export const Captions: React.FC = () => (
  <StoryWrapper label="Captions">
    <CardTitle>Card Title - 15</CardTitle>
    <Text variant="sm" mb={5}>Roboto 14 - line height - 40</Text>
    <Caption>Caption - 12</Caption>
    <Text variant="sm" mb={5}>Roboto 12 - line height - 16</Text>
    <SmallText>Small Text - 10</SmallText>
    <Text variant="sm" mb={5}>Roboto 10 - line height - 12</Text>
  </StoryWrapper>
)
