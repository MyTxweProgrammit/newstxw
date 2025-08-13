export default function Cross({ width = 18, height = 18, cls = "", color = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} width={width} height={height} viewBox="0 0 24 24">
            <path fill={color} stroke="#5f5f5f" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/>
        </svg>
    )
}
