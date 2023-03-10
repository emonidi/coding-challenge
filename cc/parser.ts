const example = `# Heading

## Sub-heading

Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_, 
**bold**, \`monospace\`.

Bullet list:

  * apples
  * oranges
  * pears`


// split by EMPTY lines
const split: string[] = example.split(/\n\s*\n/);

const isHeading = (line: string): boolean => {
  return line.trim().indexOf("#") === 0;
}

const isListItem = (line: string): boolean => {
  return line.trim().indexOf("*") === 0;
}


const isEmpty = (line: string): boolean => line === '';

const heading = (line:string):string => {
  const tag = line.match(/##/) ? 'h3' : 'h1';
  return `<${tag}>${line}</${tag}>`;
}

const list = (line:string):string => {
  const split = line.split('\n')
  let str = split.map(el => `<li>${el.replace("*","").trim()}</li>`).join('')
  return `<ul>${str}</ul>`;
} 

const parseAttributes = (line:string):string => {
  let strongRX = line.match(/\*\*(.*)\*\*/ig); 
  let italicRx = line.match(/_(.*)_/ig);
  if(strongRX){
    line = line.replace(strongRX[0],`<strong>${strongRX[1]}</strong>`)
  }
  if(italicRx){
    line = line.replace(italicRx[0],`<em>${italicRx[1]}</em>`)
  }
 
  return line;
}



const parsed = (lines:string[]) => {

  return lines.map((line, index, arr) => {
      line  = parseAttributes(line);
      if(!isHeading(line) && !isListItem(line)){
        return `<p>${line}</p>`
      }else if(isHeading(line)){
        return heading(line)
      }else if(isListItem(line)) {
        return list(line)
      }
      return line;
  })

}

console.log(parsed(split).join('\n'));