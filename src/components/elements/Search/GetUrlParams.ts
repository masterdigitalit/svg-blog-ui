interface UrlParams   {
	title : string | URL ;
}


export default function GetUrlParams({title}:UrlParams){
	const urls = new URL(
		title 
	);
	console.log(urls.pathname.split('/').splice(1))
	return urls.pathname.split('/').splice(1) 
}