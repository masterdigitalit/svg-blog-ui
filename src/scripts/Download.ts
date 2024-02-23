import axios from "../api/axios";

interface IDownload {
	path: string;
	title: string;
}

function Download<Type extends IDownload>(arg: Type): Type {
	const response = axios
		.get(arg.path, {
			method: "GET",
			responseType: "blob",
		})
		.then((response) => {
			const blob = new Blob([response.data], { type: response.data.type });
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);
			link.download = `${arg.title}.svg`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
	return arg;
}
export { Download };
