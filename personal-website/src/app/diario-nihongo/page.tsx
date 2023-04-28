import { Footer } from "@/components/Footer"
import DarkFullText from "@/components/FullText/DarkPanel"
import CommomFullText from "@/components/FullText/CommomPanel"
import { TopBar } from "@/components/TopBar"
import Link from "next/link"
import { BsCloudDownloadFill } from "react-icons/bs"

import styles from "./page.module.css"

const repositorieInfo = {
	id: "string",
	name: "MissigNo ????",
	description: "????",
	homepageUrl: "",
	url: "",
	repositoryTopics: [],
	imageName: [],
}

export default async function NihongoJournal() {
	return (
		<>
			<TopBar />
			<main className={styles.main}>
				<DarkFullText>
					<h1 className={styles.initialTitle}>Diário Nihongo</h1>
					<p>
						Olá! Esta parte do site é dedicada ao Diário Nihongo, um
						projeto pessoal que se trata de um canal no YouTube para
						registrar meu progresso de estudo no idioma japonês
						durante o ano de 2023.
					</p>
					<p>
						Aqui terão projetos web que envolvam as atividades
						elaboradas no canal e também o Guia de Gramática Diário
						Nihongo, uma apostila atualizada de acordo com o
						conteúdo estudado e repassado no canal.
					</p>

					<Link
						className={styles.link}
						target="_blank"
						href="https://www.dropbox.com/s/cxaf548fqnnk6wv/Guia-de-Gram%C3%A1tica-Di%C3%A1rio-Nihongo.pdf?dl=0">
						<BsCloudDownloadFill /> |
						<span>Baixar apostila em PDF</span>
					</Link>
				</DarkFullText>

				<CommomFullText>
					<h1>Capítulos</h1>
					<h2>Lição 01: Hiragana</h2>
					<p>
						A parte fonética e fonológica tem bastante peso pra se
						aprender um idioma de forma plena, entretanto, para quem
						mal começou ou não tem muita proficiência na língua
						japonesa se torna apenas mais um peso ou carga não
						relevante em um primeiro contato. Logo, mesmo ao tratar
						sobre fonética de forma superficial, a primeira parte
						deste guia terá foco no sistema de escrita japonesa, e
						como tema do primeiro capítulo, falaremos primeiro de um
						dos três principais: o <strong>hiragana</strong>{" "}
						(平仮名).
					</p>
					<h2>Lição 02: Katakana</h2>
					<p>
						A primeira lição foi sobre um dos principais sistemas de
						escrita do japonês, o <strong>hiragana</strong>. Devido ao
						<strong>katakana</strong> ter vários pontos exatamente iguais a
						ele, muitos detalhes nas explicações serão mais breves
						por já terem sido apresentadas em mais detalhes no
						capítulo anterior, então, caso fique algo com um tom
						mais vago, basta reler o primeiro capítulo para
						relembrar com mais detalhes. Não terá apenas o conteúdo
						fosse uma releitura do anterior, pois existem vários
						casos de usos do <strong>katakana</strong> que normalmente não se
						usa o <strong>hiragana</strong>, mas vamos para a contextualização
						pra não enrolar demais.
					</p>
					<h2>Lição 03: Mais sobre os kana</h2>
					<p>
						O <strong>hiragana</strong> e o <strong>katakana</strong> formam um conjunto
						chamado <strong>kana</strong>. O que aprendemos nos dois primeiros
						capítulos foi apenas o básico, pois apenas com aquelas
						duas tabelas, como a gente faz pra escrever uma coluna
						para o **d**, para o **g**, para o **z** ou para mais
						algumas outras consoantes que temos no português? Isso
						significa que no japonês não tem eles? Não, e em cada um
						dos tópicos a seguir será um ponto que nos falta para
						completar os requisitos para lermos tudo de
						<strong>hiragana</strong> e <strong>katakana</strong>.
					</p>
					<h2>Lição 04: Kanji</h2>
					<p>
						Passamos pelos dois silabários japoneses e seus macetes
						para leitura e escrita. Agora introduziremos um dos
						maiores desafios da língua japonesa, os <strong>kanji</strong>.
						Assim como nos capítulos de <strong>hiragana</strong> e
						<strong>katakana</strong>, passaremos primeiro pela sua
						contextualização histórica e logo em seguida algumas
						definições necessárias. Então, sem mais delongas, vamos
						a diante.
					</p>
					<h2>Lição 05: Estudando kanji</h2>
					<p>
						O que devemos ter em mente agora é que para entendermos
						realmente o japonês, contra ou a favor da nossa vontade,
						devemos saber vários <strong>kanji</strong>, mas uma das formas
						mais comuns de estudantes começarem é estudá-los pela
						ordem que os japoneses viram na escola, ou seja, a
						<strong>kyouiku kanji</strong>, a lista ensinada do 1º ao 6º ano do
						primário. Isso não é uma boa forma de gastar seu
						esforço. Neste capítulo aprenderemos melhores formas de
						estudarmos os tão temidos <strong>kanji</strong>.
					</p>
				</CommomFullText>
			</main>
			<Footer />
		</>
	)
}
