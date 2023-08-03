import styles from '@/styles/FadeInUpSentences.module.scss';

const FadeInUpSentences = (
	{
		sentences = [],
		classArray = [],
		wrapClass = '',
		delay = 800
	}
) => {

	return (

		<div className={`${wrapClass} ${styles.sentencesWrap}`}>

			{sentences.map((element, index) => (
				<p
					data-index={index}
					dangerouslySetInnerHTML={{__html: element}}
					className={`${classArray[index]} 
						${styles.sentence} ${styles.__fadeInUp}`}
					style={{animationDelay: `${index * delay}ms`}}
				></p>
			))}

		</div>

	);
}

export default FadeInUpSentences;