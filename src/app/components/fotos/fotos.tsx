import './fotos.css'
import Diaimportante from '../diaimportante/diaimportante'
import Foto1 from './../../figures/20220302-WA0015.jpg'
import Foto2 from './../../figures/20220612_171838.jpg'
import Foto3 from './../../figures/20220613_185852.jpg'
import Foto4 from './../../figures/20220625_174421.jpg'
import Foto5 from './../../figures/20220702_170939.jpg'
import Foto6 from './../../figures/20220726_162021~4.jpg'
import Foto7 from './../../figures/20220802_170015.jpg'
import Foto8 from './../../figures/20220806_164528.jpg'
import Foto9 from './../../figures/20220812_171836.jpg'
import Foto10 from './../../figures/20220902_165656.jpg'
import Foto11 from './../../figures/20221002_224913.jpg'
import Foto12 from './../../figures/20221114_200944.jpg'
import Foto13 from './../../figures/20221128_114512.jpg'
import Foto14 from './../../figures/20221217_231619.jpg'
import Foto15 from './../../figures/20221226_191559.jpg'
import Foto16 from './../../figures/20221231_235909.jpg'
import Foto17 from './../../figures/20230115_175101.jpg'
import Foto18 from './../../figures/20230302_184145.jpg'
import Foto19 from './../../figures/20230307_202146.jpg'
import Foto20 from './../../figures/20230324.jpg'
import Foto21 from './../../figures/20230611_185523.jpg'
import Foto22 from './../../figures/20230612_195715.jpg'
import Foto23 from './../../figures/20230622_214346.jpg'

export default function Fotos() {
  return (
    <>
          <section className="fotos-section">
            <Diaimportante src={Foto1} alt="" dia="02/03/2022" escrita="Nosso primeiro beijo" width={346} height={462} />
            <Diaimportante src={Foto2} alt="" dia="12/06/2022" escrita="1 dia sendo namorados" width={346} height={462} />
            <Diaimportante src={Foto3} alt="" dia="13/06/2022" escrita="Seu aniversário" width={616} height={462} />

            <Diaimportante src={Foto4} alt="" dia="25/06/2022" escrita="Você veio aqui pela primeira vez" width={346} height={462} />
            <Diaimportante src={Foto5} alt="" dia="02/07/2022" escrita="O dia do pedido de namoro" width={346} height={462} />
            <Diaimportante src={Foto6} alt="" dia="26/07/2022" escrita="O olho mais lindo desse mundo" width={397} height={462} />

            <Diaimportante src={Foto7} alt="" dia="02/08/2022" escrita="Parque da cidade (1 mês namorando)" width={346} height={462} />
            <Diaimportante src={Foto8} alt="" dia="06/08/2022" escrita="Fui conhecer sua mãe" width={346} height={462} />
            <Diaimportante src={Foto9} alt="" dia="12/08/2022" escrita="Andamos de bike pela primeira vez" width={346} height={462} />

            <Diaimportante src={Foto10} alt="" dia="02/09/2022" escrita="Santo Antonio (2 meses namorando)" width={346} height={462} />
            <Diaimportante src={Foto11} alt="" dia="02/10/2022" escrita="Aliança (3 meses namorando)" width={346} height={462} />
            <Diaimportante src={Foto12} alt="" dia="14/11/2022" escrita="Wakanda Forever" width={346} height={462} />

            <Diaimportante src={Foto13} alt="" dia="28/11/2022" escrita="1º treino juntos" width={346} height={462} />
            <Diaimportante src={Foto14} alt="" dia="17/12/2022" escrita="Você veio para 1ª reunião em família" width={346} height={462} />
            <Diaimportante src={Foto15} alt="" dia="26/12/2022" escrita="Saímos com nossas mães" width={616} height={462} />

            <Diaimportante src={Foto16} alt="" dia="01/01/2023" escrita="1ª virada juntos" width={346} height={462} />
            <Diaimportante src={Foto17} alt="" dia="15/01/2023" escrita="1ª viagem juntos" width={346} height={462} />
            <Diaimportante src={Foto18} alt="" dia="02/03/2023" escrita="Aniversário de Luís (8 meses)" width={346} height={462} />

            <Diaimportante src={Foto19} alt="" dia="07/03/2023" escrita="Aniversário de minha mãe" width={616} height={462} />   
            <Diaimportante src={Foto20} alt="" dia="24/03/2023" escrita="Enfim, formados" width={308} height={462} />
            <Diaimportante src={Foto21} alt="" dia="11/06/2023" escrita="Meu niver" width={346} height={462} />

            <Diaimportante src={Foto22} alt="" dia="12/06/2023" escrita="1º dia dos namorados oficialmente" width={346} height={462} />
            <Diaimportante src={Foto23} alt="" dia="22/06/2023" escrita="Uma bela noite no pelô" width={346} height={462} />
          </section>                
    </>
  )
}