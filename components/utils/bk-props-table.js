import BkTable from "../ui/table/bk-table";
import BkTableBody from "../ui/table/bk-table-body";
import BkTableCell from "../ui/table/bk-table-cell";
import BkTableContainer from "../ui/table/bk-table-container";
import BkTableHead from "../ui/table/bk-table-head";
import BkTableRow from "../ui/table/bk-table-row";
import BkTypography from "../ui/typography/bk-typography";
import BkButton from "../ui/actions/button/bk-button";
const BkPropsTable = (props) => {
    const { data, responsive } = props;

    return (
        <BkTableContainer>
            <BkTable responsive={ responsive }>
                <BkTableHead>
                    <BkTableRow>
                        <BkTableCell>Nombre</BkTableCell>
                        <BkTableCell>Type</BkTableCell>
                        <BkTableCell>Default</BkTableCell>
                        <BkTableCell>Descripción</BkTableCell>
                    </BkTableRow>
                </BkTableHead>
                <BkTableBody>
                    {
                        data.map( (prop, index) => (
                            <BkTableRow key={ index }>
                                <BkTableCell>{ prop.name }</BkTableCell>
                                <BkTableCell>
                                    <BkTypography color='warning' gutterBottom={ prop.name === 'iconName' }>{ prop.type }</BkTypography>
                                    {
                                        prop.name === 'iconName'
                                        &&
                                        <BkButton linkUrl="/ui/icon" variant="contained" color="primary" size='small'>Consultar valores</BkButton>
                                    }
                                </BkTableCell>
                                <BkTableCell>{ prop.default }</BkTableCell>
                                <BkTableCell>{ prop.description }</BkTableCell>
                            </BkTableRow>
                        ) )
                    }
                </BkTableBody>
            </BkTable>
        </BkTableContainer>
    );
}
 
export default BkPropsTable;