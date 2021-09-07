import { TreeItem, TreeView } from "@material-ui/lab";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from 'next/link';
import { Typography } from "@material-ui/core";

const getTreeItemsFromData = (treeItems) => {
    return treeItems.map(treeItemData => {
        let children = undefined;
        if (treeItemData.children && treeItemData.children.length > 0) {
            children = getTreeItemsFromData(treeItemData.children);
        }
        return (
            <Link key={treeItemData.id} href={treeItemData.url} passHref>
                <TreeItem
                    nodeId={treeItemData.id}
                    label={<Typography style={{paddingTop: '0.5em', paddingBottom: '0.5em'}}>{treeItemData.name}</Typography>}
                    // eslint-disable-next-line react/no-children-prop
                    children={children}
                />
            </Link>
        );
    });
};

const DataTreeView = ({ treeItems }) => {
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {getTreeItemsFromData(treeItems)}
        </TreeView>
    );
}

export default DataTreeView
