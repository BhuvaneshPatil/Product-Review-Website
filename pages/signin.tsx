import {
	Box,
	Button,
	chakra,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Stack,
	Text,
	useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addUserToStore } from "../redux/actions/userActions";
const intialFormData = {
	username: "",
	password: "",
};
const SignIn: NextPage = () => {
	// Form Icons
	const CFaUserAlt = chakra(FaUserAlt);
	const CFaLock = chakra(FaLock);
	const toast = useToast();

	const router = useRouter();
	const dispatch = useDispatch();

	// component state
	const [showPassword, setShowPassword] = useState(false);
	const [submitButtonLoadingState, setSubmitButtonLoadingState] =
		useState(false);
	const [formData, setFormData] = useState(intialFormData);

	// input change handler
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	// form submit handler
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setSubmitButtonLoadingState(true);
		try {
			const { data } = await axios.post(
				"https://fakestoreapi.com/auth/login",
				formData
			);
			window.localStorage.setItem("token", data["token"]);
			dispatch(addUserToStore());
			router.back();
			toast({
				title: "Signed in successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Invalid Credentials",
				description: "Check you credentials and retry",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
		setSubmitButtonLoadingState(false);
	};

	useEffect(() => {
		// checking if user is logged in or not
		if (window.localStorage.getItem("token")) {
			router.push("/");
			dispatch(addUserToStore());
		}
	}, []);
	return (
		<Box
			minHeight="60vh"
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Box borderRadius={"2xl"} textAlign={"center"}>
				<form onSubmit={submitHandler}>
					<Heading m={"2rem 0rem"}>Sign In</Heading>
					<Stack
						spacing={4}
						p="1rem"
						backgroundColor="whiteAlpha.900"
						boxShadow="md"
						borderRadius={"lg"}
					>
						<FormControl isRequired>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<CFaUserAlt color="gray.500" />
								</InputLeftElement>
								<Input
									type="text"
									name="username"
									placeholder="Username"
									onChange={handleChange}
								/>
							</InputGroup>
						</FormControl>
						<FormControl isRequired>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									color="gray.300"
								>
									<CFaLock color="gray.500" />
								</InputLeftElement>
								<Input
									name={"password"}
									type={showPassword ? "text" : "password"}
									placeholder="Password"
									onChange={handleChange}
								/>
								<InputRightElement width="4.5rem">
									<Button
										h="1.75rem"
										size="sm"
										onClick={() =>
											setShowPassword(!showPassword)
										}
									>
										{showPassword ? "Hide" : "Show"}
									</Button>
								</InputRightElement>
							</InputGroup>
							<FormHelperText textAlign="right">
								<Link>forgot password?</Link>
							</FormHelperText>
						</FormControl>
						<Button
							borderRadius={"md"}
							type="submit"
							variant="solid"
							colorScheme="teal"
							width="full"
							isLoading={submitButtonLoadingState}
						>
							Login
						</Button>
						<Text>Test Username = mor_2314</Text>
						<Text>Test Password = 83r5^_</Text>
					</Stack>
				</form>
			</Box>
		</Box>
	);
};

export default SignIn;
