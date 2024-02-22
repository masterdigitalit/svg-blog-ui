import style from "../styles/components/pages/home.module.scss";

export interface IOnscroll {
	ClassName: HTMLDivElement | null;
}

export const Onscroll = ({ ClassName }: IOnscroll) => {
	if (ClassName != null) {
		// Все позиции элемента
		var targetPosition = {
				top: window.pageYOffset + ClassName.getBoundingClientRect().top,
				left: window.pageXOffset + ClassName.getBoundingClientRect().left,
				right: window.pageXOffset + ClassName.getBoundingClientRect().right,
				bottom: window.pageYOffset + ClassName.getBoundingClientRect().bottom,
			},
			// Получаем позиции окна
			windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight,
			};

		if (
			targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
			targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
			targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
			targetPosition.left < windowPosition.right
		) {
			// Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
			// Если элемент полностью видно, то запускаем следующий код

			if (!ClassName.classList.contains("active")) {
				ClassName.classList.add(style["show"]);
			}
		} else {
			// Если элемент не видно, то запускаем этот код
			// if(ClassName.classList.contains('active')){
			// 	ClassName.classList.remove('show')
		}
	}
};
