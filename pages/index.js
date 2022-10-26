import React, {useState, useEffect} from "react";
import { CMS_URL } from "../enviroments/enviroment";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(function callApi(){
    getData().then(items => setItems(items))
    
  }, [])

  if(items.length !== 0){
    return (
      <>
        <div className='well-white'>
          <h5>Learn More From <br /> Keith Cunninham</h5>
          {
            items.map(n => (
              <div key={n.fields.nameOfNews}>
  
                {n?.imageURL ? <img src={`https:\\${n.imageURL}`} width='100%' alt='descroption of' /> : null}
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={n.fields.demo3}>
                    {n.fields.nameOfNews}
                  </a>
                </p>
  
                <div className="border"></div>
              </div>
            ))
          }
        </div>
      </>
    )
  } else {
    return null
  }
}
async function getData() {

  const res = await fetch(CMS_URL)
  const response = await res.json();
  const { items, includes } = response

  // const { Asset } = includes;

  const itemsImages = items.map(item => {
    if(includes?.Asset){
      for (const asset of includes?.Asset) {
        if (item.fields?.imageNews?.sys?.id === asset.sys.id) {
          return item = { ...item, imageURL: asset.fields.file.url }
        } else {
          return item
        }
      }
    } else {
      return item
    }
  })


  return itemsImages
}
