import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="skeleton"
  speed={2}
  width={405}
  height={640}
  viewBox="0 0 405 640"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="17" y="301" rx="10" ry="10" width="371" height="65" /> 
  <rect x="17" y="17" rx="9" ry="9" width="371" height="251" /> 
  <rect x="17" y="397" rx="20" ry="20" width="371" height="49" /> 
  <rect x="17" y="477" rx="20" ry="20" width="310" height="68" /> 
  <rect x="37" y="577" rx="15" ry="15" width="184" height="34" />
</ContentLoader>
)
export default Skeleton