import { Card, CardMedia, CardContent, Typography } from "@meterial-ui/core";
export const Figure = (props) => {
	<Card>
		<CardMedia
			style={{
				hight: 400,
			}}
			image={props.url}
			title="Paella dish"
		/>
		<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
				{props.facts}
			</Typography>
		</CardContent>
	</Card>;
};
