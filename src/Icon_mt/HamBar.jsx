export default function HamBar({width = 18, height = 18, color = "#5f5f5f", cls = ""}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} width={width} height={height} viewBox="0 0 24 24">
            <path fill={color} fill-rule="evenodd" d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z"/>
        </svg>
    )
}