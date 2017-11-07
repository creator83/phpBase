<?php
/**
*	IDatabase
*		содержит основные методы для работы с Гостевой книгой
*/
interface IDatabase{
	/**
	*	Выборка данных из базы
	*	@param string - sql запрос
	*	@return array - результат выборки в виде массива
	*/
	function getData($sql);

}
?>