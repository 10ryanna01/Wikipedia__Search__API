import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
    const itemTextCol=( 
  
    <div className="Wiki-UI__result-item">
      <div className="Wiki-UI__result-item-header">
        <h2 className="Wiki-UI__result-item__title">
          <Link
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            className=" Wiki-UI__result-item__title__link"
          >
            {result.title}
          </Link>
        </h2>
        <p className="Wiki-UI__result-item__desc">{result.extract} </p>
      </div>
    </div>
  );

   const content = result?.thumbnail?.source ?(
    <article className="Wiki-UI__result-item__body">

        <img src={result.thumbnail?.source}
        alt={result.title}
        width={result.thumbnail.width}
        height={result.thumbnail.height}
        loading="lazy" />
    <div>
        {itemTextCol}
        </div>
    </article>
   ) : <article> 

    {itemTextCol}
   </article>

    return content;

}
