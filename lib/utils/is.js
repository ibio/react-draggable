// @flow
/*eslint no-console:0*/
export function isIEBased() : boolean {
  return isIE() && isEdge();
}

function isIE() : boolean {
	const match = window.navigator.userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
	return match !== null;
}

function isEdge() : boolean {
	const match = window.navigator.userAgent.match(/edge\/(\d+)/);
	return match !== null;
}
