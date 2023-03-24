import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as BusinessIcon } from '../assets/business.svg';
import { ReactComponent as ApplicationIcon } from '../assets/application.svg';
import { ReactComponent as AzureLicensesIcon } from '../assets/azureLicenses.svg';
import { ReactComponent as AzureAdminIcon } from '../assets/azureAdmin.svg';
import { ReactComponent as AzureRBACIcon } from '../assets/azureRBAC.svg';
import { ReactComponent as ManagmentRolesIcon } from '../assets/managmentRoles.svg';
import { ReactComponent as ComputersIcon } from '../assets/computers.svg';
import { ReactComponent as SharedFoldersIcon } from '../assets/sharedFolders.svg'
import { ReactComponent as MailboxesIcons } from '../assets/mailboxes.svg'
import { ReactComponent as DropArrowIcon } from '../assets/dropArrow.svg'

const settings = ['Business Roles', 'Application Roles', 'Azure Licesnses', 'Azure Admin Roles', 'Azure RBAC Roles', 'Managment Roles', 'Mailboxes', 'Computers', 'Shared Folders'];
const settingsIcon = [<BusinessIcon/> , <ApplicationIcon/>, <AzureLicensesIcon/>, <AzureAdminIcon/>, <AzureRBACIcon/>, <ManagmentRolesIcon/>, <MailboxesIcons/>, <ComputersIcon/>, <SharedFoldersIcon/>]
function CategoryListItem() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [selectedCategory, setSelectedCategory] = React.useState<number>(7)
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedCategory(index);
        setAnchorElUser(null);
    };

    return (
        <Container maxWidth="xl" sx={{ paddingLeft: '0 !important'}}>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ pl: 0, "&:hover": {backgroundColor: "transparent", } }}>
                        <Typography sx={{ p: 1, pl: 0, fontFamily: 'Rubik', lineHeight: 1.19, letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal', fontSize: '27px', fontWeight: 500, color: '#5d6870' }}>{settings[selectedCategory]}</Typography>
                        <Typography sx={{ mt: 0, fontFamily: 'Rubik', lineHeight: 1.43, letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal', fontSize: '14px', fontWeight: 500, color: '#fff', background: '#307fc1', borderRadius: '8px', padding: '0 8px' }}>4</Typography>

                        <DropArrowIcon style={{marginLeft: '24px'}} />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    // onClose={handleCloseUserMenu}
                >
                    {settings.map((setting, index) => (
                        <MenuItem key={setting} onClick={(event) => handleCloseUserMenu(event, index)} sx={{ display: 'flex', width: '313px'}}>
                            {settingsIcon[index]}<Typography sx={{ml: 2}} textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Container>
    );
}
export default CategoryListItem;