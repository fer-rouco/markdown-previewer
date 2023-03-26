import './Panel.scss';

export function Panel(props) { 
  return <div className={`wrap ${props.className}`} >
    <div className="panel-header" >
      <i className={`panel-header-icon ${props.icon}`} ></i>
      {props.title}
    </div>
    {props.children}
  </div>;
}
