public class ContainsOperation extends Operation
{    
    public ContainsOperation (String symbol)
    {
        super(symbol);
    } 

    public override Boolean resolve(BaseType a,BaseType b){ 
        return a.getStringValue().contains(b.getStringValue()); 
    } 
}