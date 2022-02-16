import FavListitem from './FavListitem';

function FavList(props){
    console.log(props);
 return (
     <>
     <h1>This is my favorite list of memes</h1>
     <main>
         <FavListitem favoriteList={props.favoriteList} />
     </main>

     </>
 )
}

export default FavList;