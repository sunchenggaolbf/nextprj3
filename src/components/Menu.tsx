import IconLink from "./IconLink";
import { Stack } from 'react-bootstrap'

export default function Nav() {
    return (
        <Stack gap={3}>
            <IconLink href="/" icon="HouseFill">公司首页</IconLink>
            <IconLink href="/menu1" icon="CardList">论坛</IconLink>
            <IconLink href="/menu2" icon="CardList">通知事项</IconLink>
            <IconLink href="/menu3" icon="CardList">以往成绩</IconLink>
        </Stack>
    );
}
